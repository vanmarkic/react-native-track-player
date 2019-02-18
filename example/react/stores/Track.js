import { observable } from 'mobx';

class Track {
  @observable title = "Graffiti Moves";
  @observable artist = "Bufiman";
  // @observable artwork;
}  

export default new Track();
