import { deepMerge } from "grommet/utils";
import { grommet } from "grommet";

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

            background: 'light-3',

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

// const customTheme = deepMerge(grommet, {
//     defaultMode: "dark",
//     global: {
//       colors: {
//         "background-back": {
//           dark: "#1A1F2B",
//           light: "#EFEFEF"
//         },
//         "background-front": {
//           dark: "#222938",
//           light: "#FFFFFF"
//         },
//         "background-contrast": {
//           dark: "#FFFFFF08",
//           light: "#11111108"
//         },
//         "background-custom": {
//           dark: "#0E5265",
//           light: "#00C8FF"
//         }
//       }
//     }
//   });

    export default myTheme;