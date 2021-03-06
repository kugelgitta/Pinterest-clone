import { connect } from "react-redux";
import { fetchBoards } from "../../actions/board_action";
import BoardIndex from "../board/board_index";
import { withRouter } from "react-router-dom";
import { openModal, closeModal } from "../../actions/modal_action";

const mSTP = (state, ownProps) => {
  return {
  currentUserId: state.session.id,
  boards: Object.values(state.entities.boards),
  // user: state.entities.users[ownProps.match.prams.userId]
  user: state.entities.users[ownProps.match.params.userId],
  userId:ownProps.match.params.userId || ""
  }
};

const mDTP = dispatch => ({
  fetchBoards: userId => dispatch(fetchBoards(userId)),
  deleteBoard: boardId => dispatch(deleteBoard(boardId)),
  // closeModal: () => dispatch(closeModal()),
  openModal: (modal, boardId) => dispatch(openModal(modal, { boardId }))
});

export default withRouter(connect(mSTP, mDTP)(BoardIndex));


