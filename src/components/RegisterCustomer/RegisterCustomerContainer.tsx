import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../redux/store";
import RegisterCustomer from "./RegisterCustomer";
import { getUserThunkCreator, registerCustomerThunkCreator } from "../../redux/reducers/user-reducer";

const mapStateToProps = (state: RootState) => ({
    user: state.user.user
});

const connector = connect(mapStateToProps, {
    registerCustomer: registerCustomerThunkCreator,
    getUser: getUserThunkCreator
});

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(RegisterCustomer);