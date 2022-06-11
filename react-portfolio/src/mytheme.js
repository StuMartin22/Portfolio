import { deepMerge } from 'grommet/utils';
import { grommet } from 'grommet';

const myTheme= deepMerge(grommet,{

    defaultMode: 'light',

    global: {

        font: {
          family: 'Roboto',
          size: '18px',
          height: '20px',
        },

        colors:{

            brand: 'dark-2',

            'background-back': {
                light: 'light-2',
                dark: 'dark-5'
            },

            'background-front': {
                dark: 'light-4',
                light: 'light-2'
              },

            accentColors: [
                '#B9ED96', '#F58EA6', '#95E4EE', '#E07A52'
            ],

            neutralColors: [
                '#588958', '#020887', '#5DBCC7', '#7D1538'
            ],

            statusColors: {
                critical: '#E70D40',
                error: '#E70D40',
                warning: '#F5B700',
                ok: '#00CC33',
                unknown: '#CCCCCC',
                disabled: '#CCCCCC',
            },

            lightColors:[
                '#FFFFFB',
                '#F8F8F8',
                '#EAEBED',
                '#EDEDED',
                '#DADADA',
            ],

            darkColors:[
                '#292F36',
                '#333333',
                '#555555',
                '#777777',
                '#999999',
                '#ADADAD', 
            ]
        }
      },
});

    export default myTheme;