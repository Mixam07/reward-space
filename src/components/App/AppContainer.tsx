import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../redux/store";
import App from "./App";

const mapStateToProps = (state: RootState) => ({
    products: state.products.products
});

const connector = connect(mapStateToProps, {
});

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(App);