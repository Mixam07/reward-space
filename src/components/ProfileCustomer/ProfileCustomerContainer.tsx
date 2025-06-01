import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../redux/store";
import ProfileCustomer from "./ProfileCustomer";
import { getUserThunkCreator, setUser } from "../../redux/reducers/user-reducer";
import { buyProductThunkCreator, getCompaniesThunkCreator } from "../../redux/reducers/products-reducer";

const mapStateToProps = (state: RootState) => ({
    user: state.user.user,
    companies: state.products.companies,
    myProducts: state.products.myProducts
});

const connector = connect(mapStateToProps, {
    setUser: setUser,
    getUser: getUserThunkCreator,
    getProducts: getCompaniesThunkCreator,
    buyProduct: buyProductThunkCreator
});

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ProfileCustomer);