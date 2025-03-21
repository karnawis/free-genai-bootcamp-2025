// Import AssetLoader if needed, but we'll assume it's globally available
// through a script tag in the HTML file

class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: 'Preload' });
    }

    preload() {
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
        
        // Load all assets using AssetLoader
        this.loadAllAssets();
    }
    
    loadAllAssets() {
        this.loadUIAssets(); // Load UI assets
        this.loadCharacterAssets(); // Load character images
        this.loadBackgroundAssets(); // Load background images
        this.loadAudioAssets(); // Load audio assets
        this.loadStoryData();  // Load story data
    }

    create() {
        // Complete initialization of global managers now that all assets are loaded
        this.finalizeGlobalManagers();

        // Start the menu scene
        this.scene.start('Menu');
    }
    
    /**
     * Complete initialization of global managers after all assets are loaded
     */
    finalizeGlobalManagers() {
        const isPending = this.game.registry.get('globalManagersPending');
        
        if (isPending) {
            // Get the existing GlobalManagers instance from registry
            const globalManagers = this.game.registry.get('globalManagers');
            
            // Now initialize it with all assets loaded
            globalManagers.create(this);

            // Remove the pending flag
            this.game.registry.remove('globalManagersPending');
        }
    }
    
    loadUIAssets() {
        // Load UI assets using AssetLoader
        this.assetLoader.preloadImages([
            { id: 'menu-bg', path: 'ui/menu-background.png' },
            { id: 'black-sq', path: 'ui/black-sq.png' },
            { id: 'play-button', path: 'ui/play-button2.png' },
            { id: 'pause-button', path: 'ui/pause-button.png' },
            { id: 'stop-button', path: 'ui/stop-button.png' },
            { id: 'button', path: 'ui/button.png' },
            { id: 'button-hover', path: 'ui/button-hover.png' },
            { id: 'small-button', path: 'ui/small-button.png' },
            { id: 'small-button-hover', path: 'ui/small-button.png' },
        ]);
    }
    
    loadCharacterAssets() {
        // Load character sprites
        const characters = [
            { id: 'alex', path: 'characters/alex.png', name: 'Alex Thompson' },
            { id: 'yamamoto', path: 'characters/yamamoto.png', name: 'Yamamoto Sensei' },
            { id: 'minji', path: 'characters/minji.png', name: 'Kim Min-ji' },
            { id: 'carlos', path: 'characters/carlos.png', name: 'Garcia Carlos' },
            { id: 'hiroshi', path: 'characters/hiroshi.png', name: 'Tanaka Hiroshi' },
            { id: 'yuki', path: 'characters/yuki.png', name: 'Nakamura Yuki' },
            { id: 'kenji', path: 'characters/kenji.png', name: 'Suzuki Kenji' },
            { id: 'akiko', path: 'characters/akiko.png', name: 'Watanabe Akiko' }
        ];
        
        // Load character assets using AssetLoader
        this.assetLoader.preloadImages(characters);
    }
    
    loadBackgroundAssets() {
        // Load background images
        const backgrounds = [
            { id: 'apartment', path: 'scenes/apartment.jpg', name: 'Apartment Interior' },
            { id: 'classroom', path: 'scenes/classroom.jpg', name: 'Language School Classroom' },
            { id: 'cafe', path: 'scenes/cafe.jpg', name: 'Cafe Interior' },
            { id: 'post-office', path: 'scenes/post-office.jpg', name: 'Post Office Interior' },
            { id: 'store', path: 'scenes/corner-store.jpg', name: 'Corner Store Interior' }
        ];
        
        // Load background assets using AssetLoader
        this.assetLoader.preloadImages(backgrounds);
    }
    
    loadAudioAssets() {
        // Define audio assets to load
        const audioAssets = [
            { id: 'click', path: 'click.wav' },
            { id: 'transition', path: 'transition.wav' },
            { id: 'bg-music', path: 'bg.wav' }
        ];
        window.audioAssets = audioAssets;
        
        // Load audio assets using AssetLoader
        this.assetLoader.preloadAudio(audioAssets);
    }

    loadStoryData() {
        // Define data files to load
        const dataFiles = [
            { id: 'mappings', path: 'mappings.json' },
            { id: 'story-main', path: 'stories/main.json' },
            { id: 'scene-scene001', path: 'scenes/scene001.json' }
            // In a full game, you would load all scenes here
        ];
        
        // Load data files using AssetLoader
        this.assetLoader.preloadData(dataFiles);
    }
}
