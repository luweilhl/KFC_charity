// pages/proDetail/proDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    pid: 0,
    num: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var pid=options.pid;
    wx.request({
      url:"http://127.0.0.1:3009/details",
      type:"get",
      data: { pid: pid },
      success:(res)=>{
        this.setData({
          list:res.data,
          pid:options.pid,
          num:res.data[0].num
        })
      }
    })
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
  toCart(){
    var goods_id = this.data.pid;//商品id
    var goods_arr = wx.getStorageSync('goods_arr');
    var num_arr = wx.getStorageSync('num_arr');//拿购物车中订购量数组
    // console.log(goods_id)
    // console.log(num_arr)
    if (goods_arr) { //如果缓存不为空
      if(goods_id == goods_arr[goods_id]){
        num_arr[goods_id]++;
        wx.setStorageSync('goods_arr', goods_arr);
        // console.log(goods_arr)     
        wx.setStorageSync('num_arr', num_arr);  
        // console.log(num_arr)          
      }else{
        goods_arr[goods_id] = goods_id;//将该商品添加到缓存
        num_arr[goods_id] = this.data.num;
        wx.setStorageSync('goods_arr', goods_arr);
        // console.log(goods_arr)     
        wx.setStorageSync('num_arr', num_arr);  
      }
    } else {
      var goods_arr = {};//开空对象
      var num_arr={};
      goods_arr[goods_id] = goods_id;//key和value都是goodsId
      // console.log(goods_arr)      
      // console.log(this.data.num)
      num_arr[goods_id] = this.data.num;
      // console.log(num_arr)      
      wx.setStorageSync('goods_arr', goods_arr);//更多的商品加入到购物车时，以多数组形式保存        
      wx.setStorageSync('num_arr', num_arr);
    }
    wx.switchTab({//接着跳到购物车页
      url: "../cart/cart"
    });
    }
})