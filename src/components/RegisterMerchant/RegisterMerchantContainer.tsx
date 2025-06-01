import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../redux/store";
import RegisterMerchant from "./RegisterMerchant";
import { getUserThunkCreator, registerMerchantThunkCreator } from "../../redux/reducers/user-reducer";

const mapStateToProps = (state: RootState) => ({
});

const connector = connect(mapStateToProps, {
    registerMerchant: registerMerchantThunkCreator,
    getUser: getUserThunkCreator
});

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(RegisterMerchant);