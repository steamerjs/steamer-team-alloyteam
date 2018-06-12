let teamConfig = {
    config: {
        NPM: 'tnpm',
        TEAM: 'alloyteam'
    },
    kits: [
        {
            'name': 'steamer-react',
            'git': 'https://github.com/steamerjs/steamer-react.git'
        },
        {
            'name': 'steamer-vue',
            'git': 'https://github.com/steamerjs/steamer-vue.git'
        },
        {
            'name': 'steamer-simple',
            'git': 'https://github.com/steamerjs/steamer-simple.git'
        },
        {
            'name': 'steamer-react-component',
            'git': 'https://github.com/steamerjs/steamer-react-component.git'
        },
        {
            'name': 'steamer-vue-component',
            'git': 'https://github.com/steamerjs/steamer-vue-component.git'
        },
        {
            'name': 'steamer-simple-component',
            'git': 'https://github.com/steamerjs/steamer-simple-component.git'
        },
        {
            'name': 'steamer-logic-component',
            'git': 'https://github.com/steamerjs/steamer-logic-component.git'
        },
        {
            'name': 'steamer-kit-library',
            'git': 'https://github.com/steamerjs/steamer-kit-library.git'
        }
    ],
    plugins: [
        'steamer-plugin-mock',
        'steamer-plugin-jb',
        'steamer-plugin-ak',
        'steamer-plugin-alloystore',
        'steamer-plugin-task'
    ],
    tasks: [
        'steamer-task-alloyteam'
    ],
    beforeInstall: function() {

    },
    afterInstall: function() {
        
    }
};

module.exports = teamConfig;