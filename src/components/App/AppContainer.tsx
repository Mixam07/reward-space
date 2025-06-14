import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../redux/store";
import App from "./App";
import { getUserThunkCreator } from "../../redux/reducers/user-reducer";

const mapStateToProps = (state: RootState) => ({
    user: state.user.user
});

const connector = connect(mapStateToProps, {
    getUser: getUserThunkCreator
});

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(App);