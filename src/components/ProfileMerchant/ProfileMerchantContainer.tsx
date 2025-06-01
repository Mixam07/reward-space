import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../redux/store";
import ProfileMerchant from "./ProfileMerchant";
import { createCertificateThunkCreator, createDiscountThunkCreator, getKeyThunkCreator, setUser } from "../../redux/reducers/user-reducer";
import { createCertificate } from "../../api/user";

const mapStateToProps = (state: RootState) => ({
    user: state.user.user,
    apiKey: state.user.apiKey
});

const connector = connect(mapStateToProps, {
    setUser: setUser,
    getKey: getKeyThunkCreator,
    createCertificate: createCertificateThunkCreator,
    createDiscount: createDiscountThunkCreator
});

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ProfileMerchant);