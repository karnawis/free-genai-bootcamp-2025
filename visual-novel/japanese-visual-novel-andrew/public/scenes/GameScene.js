class GameScene extends BaseScene {
    constructor() {
        super({ key: 'Game' });
    }

    create() {
        this.isReady = false
        console.log('yeee!')
        //this.g.audio.stopBgm(this.ready.bind(this))
        this.ready()
    }

    ready(){
        console.log('ready!')
        this.isReady = true
        console.log('ready!')
        this.cameras.main.fadeIn(600, 0, 0, 0)

        this.g.audio.updateScene(this);
        this.g.audio.create();
        this.g.ui.updateScene(this);

        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        this.panel = this.add.rectangle(0, 0, width, height, 0x222222, 1).setOrigin(0, 0);

        this.dialogManager = new DialogManager(this.g,this);
        this.dialogManager.create();
        this.g.audio.createDialog(this.dialogManager.getAudioDialogs());

        this.backgroundManager = new BackgroundManager(this.g,this.dialogManager,this);
        this.backgroundManager.create();

        this.characterManager = new CharacterManager(this.g,this.dialogManager,this);
        this.characterManager.create(); // Create background and scene elements

        this.uiGameActions = new GameUIActions(this.g.ui, this);
        this.uiGameActions.create(width - 12, 12);
        this.uiGameActions.show();

        this.uiDialog = new DialogUI(this.g.ui,this.dialogManager, this);
        this.uiDialog.create(12, height - 12);
        this.uiDialog.show();

        this.uiSettings = new SettingsUI(this.g.ui, this);
        this.uiSettings.create(0, 0);
        this.uiSettings.hide();

        //this.startGame(); // Start the story/dialog flow
        super.create();

        this.loadTransition(OpenEyesPostFxPipeline)
        this.playTransition()
    }

    loadTransition(postFxPipeline){
        this.renderer.pipelines.addPostPipeline(postFxPipeline.name, postFxPipeline);
        this.cameras.main.setPostPipeline(postFxPipeline);
    }

    playTransition(){
        const pipeline = this.cameras.main.getPostPipeline(OpenEyesPostFxPipeline.name);
        pipeline.edgeBlurAmount = 1.5;  // Strong edge blur
        pipeline.openAmount = 0;   
        this.tweens.add({
            targets: pipeline,
            openAmount: 1, // Open the eye
            duration: 1000, 
            ease: 'Cubic.easeOut', // Use any easing function
            onComplete: () => {
                console.log('Eye opening complete');
            }
        });
    }

    registerEvents() {
        this.g.eventBus.on('ui:button:gm-quick-save:pointerdown',this.quickSave);
        this.g.eventBus.on('ui:button:gm-save:pointerdown',this.save);
        this.g.eventBus.on('ui:button:gm-load:pointerdown',this.load);
        this.g.eventBus.on('ui:button:gm-settings:pointerdown',this.openSettings);
        this.g.eventBus.on('ui:button:settings-close:pointerdown',this.closeSettings);
        this.g.eventBus.on('ui:button:dialog-next:pointerdown',this.dialogNext);
        this.g.eventBus.on('ui:button:dialog-choice-0:pointerdown',this.dialogChoice0);
        this.g.eventBus.on('ui:button:dialog-choice-1:pointerdown',this.dialogChoice1);
        this.g.eventBus.on('ui:button:dialog-choice-2:pointerdown',this.dialogChoice2);
        this.g.eventBus.on('ui:button:dialog-choice-3:pointerdown',this.dialogChoice3);
        this.g.eventBus.on('ui:button:dialog-choice-4:pointerdown',this.dialogChoice4);
        this.g.eventBus.on('ui:button:dialog-choice-5:pointerdown',this.dialogChoice5);
        this.g.eventBus.on('ui:play-button:dialog-play:pointerdown',this.dialogAudioAction);
    }


    dialogNext(ev){    
        ev.scene.g.audio.playSoundEffect('click')
        ev.scene.dialogManager.advance('next'); 
    }
    dialogChoice0(ev){ 
        ev.scene.g.audio.playSoundEffect('click')
        ev.scene.dialogManager.advance('choice',0); 
    }
    dialogChoice1(ev){ 
        ev.scene.g.audio.playSoundEffect('click')
        ev.scene.dialogManager.advance('choice',1); 
    }
    dialogChoice2(ev){ 
        ev.scene.g.audio.playSoundEffect('click')
        ev.scene.dialogManager.advance('choice',2); 
    }
    dialogChoice3(ev){ 
        ev.scene.g.audio.playSoundEffect('click')
        ev.scene.dialogManager.advance('choice',3); 
    }
    dialogChoice4(ev){ 
        ev.scene.g.audio.playSoundEffect('click')
        ev.scene.dialogManager.advance('choice',4); 
    }
    dialogChoice5(ev){ 
        ev.scene.g.audio.playSoundEffect('click')
        ev.scene.dialogManager.advance('choice',5); 
    }
    
    dialogAudioAction(ev){
        if (ev.action === 'play') {
            ev.scene.dialogPlay(ev);
        } else if (ev.action === 'pause') {
            ev.scene.dialogPause(ev);
        } else if (ev.action === 'stop') {
            ev.scene.dialogStop(ev);
        }
    }

    dialogPlay(ev) {
        const audioKey = ev.scene.dialogManager.dialogNode.audio
        const sceneId = ev.scene.g.saves.get('sceneId');
        if (audioKey){
            const dialogAudio = ev.scene.g.audio.getDialog(sceneId, audioKey)

            // Reset all word colors
            ev.scene.g.eventBus.emit('ui:sentence:reset-highlighting');

            // Set up time update using a timer event
            // Check every 50ms for better accuracy with word timing
            let audioTimeUpdateEvent = ev.scene.time.addEvent({
                delay: 50,
                callback: function(){
                    ev.scene.g.eventBus.emit('ui:sentence:update-highlighting', { dialogAudio: dialogAudio });
                },
                callbackScope: ev.scene,
                loop: true
            });
    
            // Called when audio completes playing
            const onAudioComplete = () => {
                if (audioTimeUpdateEvent) {
                    audioTimeUpdateEvent.remove();
                    audioTimeUpdateEvent = null;
                }
                ev.scene.g.eventBus.emit('ui:sentence:reset-highlighting');
                ev.item.setStop()
            }
            dialogAudio.on('complete',onAudioComplete)


            ev.scene.g.audio.playDialog(sceneId, audioKey)
        }
    }
    dialogStop(ev) {
        ev.item.setStop()
        const sceneId = ev.scene.g.saves.get('sceneId');
        const audioKey = ev.scene.dialogManager.dialogNode.audio
        ev.scene.g.audio.stopDialog(sceneId, audioKey)
    }

    openSettings(ev) {
        ev.scene.g.audio.playSoundEffect('click')
        ev.scene.uiGameActions.hide();
        ev.scene.uiSettings.show();
    }

    closeSettings(ev){
        ev.scene.g.audio.playSoundEffect('click')
        ev.scene.uiGameActions.show();
        ev.scene.uiSettings.hide();
    }
    
    /**
     * Load any saved state from local storage
     */
    loadSavedState() {
        // Load any saved state via the save manager
        const hasSavedState = this.saveManager.hasSavedState();
        if (hasSavedState) {
            // Notify other modules that we're loading a saved state
            eventBus.emit('state:loading', { sceneId: this.sceneId });
            this.saveManager.loadStateForCurrentScene(this.sceneId);
        }
    }
    
    /**
     * Start the game/story flow
     */
    startGame() {
        // Set the current scene in the story manager
        this.storyManager.setCurrentScene(this.sceneId);
        
        // Load scene data (dialog, characters, etc.)
        const dataLoaded = this.storyManager.loadSceneData(this.sceneId);
        
        if (!dataLoaded) {
            eventBus.emit('notification:show', { 
                message: 'Error: Failed to load scene data',
                options: { type: 'error' }
            });
            return;
        }
        
        // Start the dialog flow
        this.dialogManager.startDialog();
    }

    update() {
        if (!this.isReady) {return }
        this.uiDialog.update();
    }
}
