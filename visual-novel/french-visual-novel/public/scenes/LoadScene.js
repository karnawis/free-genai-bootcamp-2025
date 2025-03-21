// similar to the preload screne but only loading
// in the voice assets for the current GameScene story scene.
class LoadScene extends BaseScene {
  constructor() {
      super({ key: 'Load' });
  }

  init(data) {
    this.sceneId = data.sceneId
    this.dialogData = data.dialogData
  }

  preload() {
    this.cameras.main.fadeIn(600, 0, 0, 0)

    // Initialize AssetLoader
    this.assetLoader = new AssetLoader(this);

    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    this.add.image(0,0, 'loading-bg')
    .setDisplaySize(width, height)
    .setOrigin(0,0);

    // Create loading bar
    this.loadingBar = this.assetLoader.createLoadingBar(
        width / 2 - 200, 
        height / 2 - 20, 
        400, 
        40, 
        2
    );

    // we ned saves data first prior to loading assets.
    this.loadStoryAssets();
  }

  loadStoryAssets() {
    // get th audio keys from the dialog data
    //iterate over key and value of .dialog
    const voiceAudios = [];
    for (const dialogId in this.dialogData.dialog) {
      const dialogNode = this.dialogData.dialog[dialogId];
      const voiceKey = dialogNode.audio;
      if (voiceKey){
        voiceAudios.push([this.sceneId,voiceKey]);
      }
    }

    this.assetLoader.loadVoiceAssets(voiceAudios);
  }

  create() {
    this.cameras.main.fadeOut(300, 0, 0, 0)
    this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
      this.changeScene('Game')
    })
  }
}