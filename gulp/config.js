/**
 * path define src, dest, temp and vendor folders
 *
 */

var basePaths = {
    src: 'src',
    dest: 'build',
    temp: '.temp',
    vendor: 'bower_components'
};

/**
 * More tailored path definition
 * @type {Object}
 */
var paths = {
    images: {
        src: basePaths.src + '/images', dest: basePaths.dest + '/images',
        src_sprite: basePaths.src + '/images/sprite/*',
        src_svg: basePaths.src + '/images/svg/*'
    },
    scripts: {
		src: basePaths.src + '/js', dest: basePaths.dest + '/js'
    },
    styles: {
        src: basePaths.src + '/css', dest: basePaths.dest + '/css',
        // CSS pre-processors
        src_sass: basePaths.src + '/sass',
        src_less: basePaths.src + '/less',
        src_styl: basePaths.src + '/styl'
    }
};

var appFiles = {
    sass: [paths.styles.src + '/**/*.scss', paths.styles.src_sass + '/**/*.scss'],
    less: [paths.styles.src + '/**/*.less', paths.styles.src_less + '/**/*.less'],
    styl: [paths.styles.src + '/**/*.styl', paths.styles.src_styl + '/**/*.styl'],
    coffee: [paths.scripts.src + '/**/*.coffee'],
    scripts: [paths.scripts.src + '/**/*.js'],
    html: [process.cwd() + '/*.html', basePaths.src + '/**/*.html', basePaths.src + '/pages/**/*.html'],
    images:[paths.images.src + '/**/*.{jpg,jpeg,png,gif}'],
    fonts:[basePaths.vendor + '/**/*.{ttf,woff,eof,svg}', basePaths.src + '/**/*.{ttf,woff,eof,svg}']
};

var vendorFiles = {
    styles: '',
    scripts: ''
};

var spriteConfig = {
    imgName: 'sprite.png',
    cssName: '_sprite.scss',
    imgPath: paths.images.dest.replace('public', '') + 'sprite.png'
};

// Export
module.exports = {
    settings: {
        showLogs: false
    },
    base: basePaths,
    src: appFiles,
    paths: paths,
    vendor: vendorFiles,
    settings: {
        sprite: spriteConfig,
        sass: {
            style: 'compact'
        },
        styleExt: 'sass'
    },
    // deployment configuration
    remote:{
    	hostname:''
    },
    data: {
        title:'',
        description:'',
        author: ''
    }
};
