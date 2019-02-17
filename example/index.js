import { AppRegistry } from 'react-native';
import TrackPlayer from 'react-native-track-player';

import App from './App';
import PlayerStore, { playbackStates } from './react/stores/Player';
import TrackStore from './react/stores/Track';

AppRegistry.registerComponent('exampletrackplayer', () => App);
TrackPlayer.registerPlaybackService(() => require('./service'));
