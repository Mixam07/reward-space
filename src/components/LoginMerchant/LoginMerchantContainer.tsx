import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../redux/store";
import LoginMerchant from "./LoginMerchant";
import { getUserThunkCreator, loginMerchantThunkCreator } from "../../redux/reducers/user-reducer";

const mapStateToProps = (state: RootState) => ({
});

const connector = connect(mapStateToProps, {
    loginMerchant: loginMerchantThunkCreator,
    getUser: getUserThunkCreator
});

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(LoginMerchant);