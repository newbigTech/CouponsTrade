/**
 * Author：pengfei
 * Create Date：2016/12/13
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * 查询商品组建
 */


import React from 'react'
import { reduxForm} from 'redux-form'
import SellingCouponList from './SellingCouponList'

const SearchCouponList = (props)=> {
    const {onSearch, onClickPushPage, data, navigator,token} = props;
    return (
        <div>
            <section>
                <input type="search" placeholder="商品名称" className="search-input"
                       onBlur={(e)=>onSearch(e.target.value) }/>
            </section>
            <SellingCouponList data={data} navigator={navigator} token={token} onClickPushPage={onClickPushPage}/>
        </div>
    )
};

SearchCouponList.propTypes = {
    onSearch: React.PropTypes.func.isRequired,
    data: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            id:React.PropTypes.string.isRequired,
            couponName: React.PropTypes.string.isRequired,
            sellingPrice: React.PropTypes.number.isRequired,
            description: React.PropTypes.string.isRequired
        })).isRequired,
    onClickPushPage: React.PropTypes.func.isRequired,
    navigator: React.PropTypes.object.isRequired,
    token:React.PropTypes.string.isRequired
};

export default reduxForm({
    form: "SearchCouponList"
})(SearchCouponList)

