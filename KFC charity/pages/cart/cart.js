// pages/cart/cart.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts: [],               // 购物车列表
    hasList: false,          // 列表是否有数据
    totalPrice: 0,           // 总价，初始为0
    selectAllStatus: false    // 全选状态，默认不全选
  },

  /**
   * 生命周期函数--监听页面加载
   */
   onLoad: function () {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    var goods_arr = wx.getStorageSync('goods_arr');//拿添加到购物车中商品的id数组 
    // console.log(goods_arr); 
    var num_arr = wx.getStorageSync('num_arr');//拿添加到购物车中商品的订购量数组 
    // console.log(num_arr);     
    if (!goods_arr || JSON.stringify(goods_arr) == "{}") {//不存在或把购物车删干净后提示后跳转
      wx.showModal({
        title: '提示',
        content: '你还没添加礼品呢，请先去挑选',
        success: function (res) {
          if (res.confirm) {
            wx.switchTab({
              url: "../product/product"
            })
          }
        }
      })
    }else{
      var arr = [];//开空数组  
      for (var i in goods_arr) {//对商品id组进行遍历  
        var subject = goods_arr[i];
        arr.push(subject);//通过push统一转移  
      }
      var post_id = arr.join();//将arr数组通过join方法转为字符串  
      if (post_id != "") {
        this.data.carts=[];
        for(var i=0;i<arr.length;i++){
          wx.request({
            url: "http://127.0.0.1:3009/details",
            data: {
              pid: arr[i]
            },
            header: {
              "Content-type": "json"
            },
            success: function (res) {
              // console.log(res.data);
              var cart = res.data;
              var hasList;
              if (cart.length == 0) {
                hasList = false;
              } else {
                hasList = true;
              }
              for (var i = 0; i < cart.length; i++) {
                var goods_id = cart[i].pid;
                cart[i].num = num_arr[goods_id];
              }
              // console.log(cart[0])
              var carts=that.data.carts;
              carts.unshift(cart[0]);
              that.setData({
                carts: carts,
                hasList: hasList,
              })
            }
          })
        }
      }
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 增加数量
  addCount(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    num = num + 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },
  // 减少数量
  minusCount(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    if (num <= 1) {
      return false;
    }
    num = num - 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },
  selectList(e) {
    const index = e.currentTarget.dataset.index;    // 获取data- 传进来的index
    let carts = this.data.carts;                    // 获取购物车列表
    const selected = carts[index].selected;         // 获取当前商品的选中状态
    carts[index].selected = !selected;              // 改变状态
    this.setData({
      carts: carts
    });
    console.log(carts)
    var result = true;
    for(var i=0;i<carts.length;i++){
      result = result && carts[i].selected
    }
    this.setData({
      selectAllStatus: result
    });
    this.getTotalPrice();                           // 重新获取总价
  },
  selectAll(e) {
    let selectAllStatus = this.data.selectAllStatus;    // 是否全选状态
    selectAllStatus = !selectAllStatus;
    let carts = this.data.carts;

    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = selectAllStatus;            // 改变所有商品状态
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      carts: carts
    });
    this.getTotalPrice();                               // 重新获取总价
  },
  getTotalPrice() {
    let carts = this.data.carts;                  // 获取购物车列表
    let total = 0;
    for (let i = 0; i < carts.length; i++) {         // 循环列表得到每个数据
      if (carts[i].selected) {                   // 判断选中才会计算价格
        total += carts[i].num * carts[i].price;     // 所有价格加起来
      }
    }
    this.setData({                                // 最后赋值到data中渲染到页面
      carts: carts,
      totalPrice: total.toFixed(2)
    });
  },
  deleteList: function (e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    var that = this;
    wx.showModal({
      title: '提示',
      content: '你正准备从购物车中删除这个商品',
      success: function (res) {
        if (res.confirm) {
          var delId = e.currentTarget.dataset.delid;//转过来的商品id  
          var goods_arr = wx.getStorageSync('goods_arr');
          delete goods_arr[delId];//删除对象中的元素  
          var num = wx.getStorageSync('num_arr');//拿添加到购物车中商品的订购量数组  
          delete num[delId];//删除对象中的元素  
          carts.splice(index, 1); // 删除购物车列表里这个商品
          var hasList=null;
          if (carts.length == 0) {
            hasList = false;
          }else{
            hasList=true;
          }
          that.setData({
            carts: carts,
            hasList: hasList
          });
          wx.setStorageSync('goods_arr', goods_arr);//重新设缓存  
          wx.setStorageSync('num', num);//重新设缓存 
          wx.showToast({
            title: '删除成功',
            icon: 'success',
            duration: 1000
          });
          // setTimeout(function () {
          //   wx.switchTab({
          //     url: "../cart/index"
          //   })
          // }, 2000);
        }
      }
    })
  }
})