[TOC]:#

# Table of Contents
- [定义](#定义)
    - [用户名](#用户名)
    - [发布过的优惠券](#发布过的优惠券)
    - [开启](#开启)
    - [优惠券状态](#优惠券状态)
    - [邀请人数](#邀请人数)
    - [下架优惠券](#下架优惠券)
- [字典](#字典)
    - [1 登陆signIn、注册signUp](#1-登陆signin注册signup)
    - [2 优惠券：couponsTrade](#2-优惠券couponstrade)
    - [3 订单：order](#3-订单order)
    - [4 Action](#4-action)


## 定义

### 用户名
- 在本项目中用户名是指用户的手机号

### 发布过的优惠券
- 是指优惠券状态为未发布、发布、过期、已售（开启）、已售（未开启）的优惠券

### 开启
- 是指解密,在本项目中是指优惠券是否解密

### 优惠券状态
- 出售中：
- 已支付：
- 已下架：
- 退货：
- 仲裁：

### 邀请人数
- 是指邀请人已经邀请用户的个数


### 下架优惠券
- 是指将优惠券暂停或停止售卖

## 字典

注：该文档需要实时维护

### 1 登陆signIn、注册signUp
- `用户名`：phoneNo：将userName改为phoneNo
- 密码：password
- 昵称：nickName
- 手机号：phoneNo
- 验证码：validateCode
- 邀请码：inviteCode
- 邀请人数：inviteCount
- 原密码：oldPassword
- 新密码：newPassword
- 再次输入新密码：reNewPassword

### 2 优惠券：couponsTrade
- `发布过的优惠券`：publishedCoupons
- 查询优惠券：queryCoupons
- 优惠券列表：CouponList
- 优惠券详情：CouponInfo
- `下架优惠券`:soldOut
- 编辑优惠券：edit
- 优惠券唯一标识：id
- 优惠券名称：couponName
- 优惠券码：couponCode
- 优惠券原价：originalPrice
- 优惠券售卖价：sellingPrice
- 优惠券券面价：ticketPrice
- 优惠券截止日期：endDate
- 优惠券是否支持退货：isMaticRefund
- 优惠券类别：couponType
  - 西餐 0-Western Food
  - 海鲜 1-seafood
  - 咖啡 2-coffee
  - 面包糕点 3-breadCakes
  - 火锅 4-hotPot
  - 烧烤 5-barbecue
  - 冰激凌 6-iceCream
  - 快餐 7-fastFood
  - 自助餐 8-buffet
  - 其他 9-other
- 券码形式：couponModality
  - 包括：图片或文本
- 优惠券描述：describe
  - 包括：可消费日期、可消费的时间等信息，
- 优惠券图片（与商户相关）：picture
- 优惠券前台状态：couponState
  - 出售中：onSale
  - 已下架：soldOut
  - 已支付：havePaid
  - 仲裁：arbitration
  - 退货：returnedGoods
- 求购优惠券前台状态：buyCouponState
  - 求购中：inPlay
  - 已下架：soldOut
  - 已支付：havePaid
  - 仲裁：arbitration
  - 退货：returnedGoods


### 3 订单：order
- 付款方式：paymentMethod
- 微信：weChat
- 支付宝：aliPay
- 订单编号：orderNo
- 订单支付日期：orderDate
- 订单支付时间：orderTime
- 卖家昵称：sellerNickName
- 买家昵称：buyerNickName
- 订单列表：orderList
- 订单详情：orderInfo
- 订单状态：orderState
  - 待支付:0-waitPay
  - 订单取消:1-cancel
  - 订单超时:2-overtime
  - 已支付:3-payComplete
  - 已确认:4-Confirmed
  - 已退货:5-backGoodsComplete
  - 已退款:6-moneyBackComplete
  - 申请退货:7-applicationBackGoods
  - 拒绝退货:8-rejectBackGoods
  - 仲裁开启:9-arbitrationOpen
  - 仲裁结束:10-arbitrationEnd


### 4 Action
- 开始等待：onLoad
- 取消等待：unLoad
- 显示消息框:showDialog
- 隐藏消息框:hideDialog
- 注册的请求:signUpRequest
- 注册成功：signUpSuccess
- 登录的请求:loginRequest
- 登录成功:loginSuccess
- 退出当前账户的请求:logoutRequest
- 退出当前账户成功：logoutSuccess
- 获取用户信息的请求：getUserInfoRequest
- 获取用户信息成功：getUserInfoSuccess
- 更新用户信息的请求：updateUserInfoRequest
- 更新用户信息成功：updateUserInfoSuccess
- 生成邀请码的请求：createInviteCodeRequest
- 生成邀请码成功：createInviteCodeSuccess
- 验证密码的请求：verifyPasswordRequest
- 验证密码成功：verifyPasswordSuccess
- 更改密码的请求：updatePasswordRequest
- 更改密码成功：updatePasswordSuccess
- 获取优惠券列表请求：getCouponsListRequest
- 获取优惠券列表成功：getCouponsListSuccess
- 获取优惠券详情请求：getCouponsInfoRequest
- 获取优惠券详情成功：getCouponsInfoSuccess
- 编辑后更新优惠券请求：updateUserCouponRequest
- 编辑后更新优惠券成功：updateUserCouponSuccess
- 下架优惠券请求：soldOutCouponRequest
- 下架优惠券成功：soldOutCouponSuccess
- 创建订单请求：createOrderRequest
- 成功创建订单：createOrderSuccess
- 支付订单请求：payOrderRequest
- 支付订单成功：payOrderSuccess
- 取消订单请求：cancelOrderRequest
- 取消订单成功：cancelOrderSuccess
- 确认收货请求：receiptOrderRequest
- 确认收货成功：receiptOrderSuccess
- 获取订单列表请求：getOrderListRequest
- 获取订单列表成功：getOrderListSuccess
- 发布优惠券请求：publishCouponRequest
- 发布优惠券成功：publishCouponSuccess
- 获取订单详细信息请求：getOrderInfoRequest
- 获取订单详细信息成功：getOrderInfoSuccess
- 优惠券请求：CouponRequest
- 优惠券成功：CouponSuccess


