import Color from './Color'

export default {
  header: {
    backgroundColor: {
      type: 'select',
      values: Color
    },

    fontSize: {
      type: 'select',
      values: ['12px', '14px', '16px']
    }
  },
  hero: {
    backgroundColor: {
      type: 'select',
      values: Color
    },
  }

}