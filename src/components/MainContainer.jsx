import Main from './Main';
import {connect} from 'react-redux';
import {fetchPhoto} from '../actions/photo';
import { bindActionCreators } from 'redux'

const mapStateToProps = (state, ownProps) => {
    return ({
    // ... computed data from state and optionally ownProps
        photos: state.receivePhoto.list.list
    })
}

const mapDispatchToProps = dispatch => ({
    // ... normally is an object full of action creators
    getPhotoList : bindActionCreators(fetchPhoto, dispatch)
})

// and that function returns the connected, wrapper component:
//const ConnectedComponent = connectToStore(Component)

// We normally do both in one step, like this:
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
