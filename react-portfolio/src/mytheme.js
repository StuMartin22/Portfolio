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
                light: 'light-3',
                dark: 'dark-5'
            },

            'background-front': {
                dark: 'light-5',
                light: 'light-3'
              },

            accentColors: [
                '#6FFFB0', '#FD6FFF', '#81FCED', '#FFCA58'
            ],

            neutralColors: [
                '#588958', '#3D138D', '#00739D', '#A2423D'
            ],

            statusColors: {
                critical: '#FF4040',
                error: '#FF4040',
                warning: '#FFAA15',
                ok: '#00C781',
                unknown: '#CCCCCC',
                disabled: '#CCCCCC',
            },

            lightColors:[
                '#F8F8F8',
                '#F2F2F2',
                '#EDEDED',
                '#DADADA',
                '#DADADA',
                '#DADADA',
            ],

            darkColors:[
                '#333333',
                '#555555',
                '#777777',
                '#999999',
                '#999999',
                '#999999',
            ]
        }
      },
});

    export default myTheme;