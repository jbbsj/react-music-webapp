import React, {Component} from 'react';
import YellowHeader from '../../components/yellow-header/yellow-header'
import { connect } from 'react-redux';
import { getSongs } from '../../redux/personal.redux';
import SongEditList from '../../components/songs-edit-list/songs-edit-list'
import './collect-songs.less'

@connect(
    state=>state.personal,
    { getSongs }
)
class CollectSongs extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount(){
        this.props.getSongs(this.props.match.params.id)
    }
    render() {
        return (
            <div id="collect-songs">
                <YellowHeader title="收藏的歌曲"/>
                {
                    this.props.songList?
                        <SongEditList data={this.props.songList}/>
                        :
                        ""
                }

            </div>
        )
    }
}
export default CollectSongs