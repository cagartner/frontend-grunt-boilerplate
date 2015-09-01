module.exports = function(grunt) {
    grunt.initConfig({
        // Uglify -------------------------------------------
        // Junta e compacta arquivos de js em um único arquivo
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'dist/js/app.js': [
                        // Adiciona os packages de terceiros necessários ao projeto
                        'vendor/jquery/dist/jquery.min.js',
                        'vendor/bootstrap/dist/js/bootstrap.min.js',
                        // Adiciona javascript da aplicação
                        'src/js/app.js'
                    ]
                }
            }
        }, // end uglify
        // Less Build -----------------------------------------
        // Compila arquivos less para css, se quiser usar sass mudar aqui
        less: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'dist/css/styles.css': 'src/less/styles.less'
                }
            }
        }, // end less
        // Imagemin -------------------------------------------
        // Comprime imagem para deixá-las mais leves
        imagemin : {
            dynamic : {
                files : [{
                    expand : true, // Enable dynamic expansion
                    cwd : 'src/images', // source images (not compressed)
                    src : ['**/*.{png,jpg,gif}'], // Actual patterns to match
                    dest : 'dist/images' // Destination of compressed files
                }]
            }
        }, //end imagemin
        // Copy -----------------------------------------------
        // Copia arquivos importantes para pasta 'dist'
        copy: {
            main: {
                files: [
                    // Copia Fonts do font-awesome
                    {
                        cwd: 'vendor/font-awesome/fonts/',
                        src: ['**'], // copy all files and subfolders
                        dest: 'dist/fonts/',    // destination folder
                        expand: true           // required when using cwd
                    },
                    // Copia fonts do bootstrap
                    {
                        cwd: 'vendor/bootstrap/fonts/',
                        src: ['**'], // copy all files and subfolders
                        dest: 'dist/fonts/',    // destination folder
                        expand: true           // required when using cwd
                    }
                ]
            }
        },// copy
        // Watch -------------------------------------------------
        // Observa arquivos no desenvolvimento para compilar e recarregar a página
        watch: {
            dist: {
                files: ['src/js/**/*', 'src/sass/**/*', 'src/less/**/*', 'src/images/**/*'],
                tasks: ['uglify', 'less']
            }
        } // watch
    });
    // Plugins do Grunt
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    // Tarefas que serão executadas
    grunt.registerTask('default', ['uglify', 'less', 'imagemin', 'copy']);
    // Tarefa para Watch
    grunt.registerTask('w', ['watch']);
};