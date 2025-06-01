import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../redux/store";
import LoginCustomer from "./LoginCustomer";
import { getUserThunkCreator, loginCustomerThunkCreator } from "../../redux/reducers/user-reducer";

const mapStateToProps = (state: RootState) => ({
});

const connector = connect(mapStateToProps, {
    loginCustomer: loginCustomerThunkCreator,
    getUser: getUserThunkCreator
});

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(LoginCustomer);