import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../redux/store";
import ProfileCustomer from "./ProfileCustomer";
import { setUser } from "../../redux/reducers/user-reducer";

const mapStateToProps = (state: RootState) => ({
    user: state.user.user
});

const connector = connect(mapStateToProps, {
    setUser: setUser
});

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ProfileCustomer);