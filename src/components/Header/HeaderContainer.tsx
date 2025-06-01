import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../redux/store";
import Header from "./Header";

const mapStateToProps = (state: RootState) => ({
    user: state.user.user
});

const connector = connect(mapStateToProps, {
});

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Header);