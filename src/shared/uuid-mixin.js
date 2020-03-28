import { v4 as uuid } from 'uuid'

export default {
  methods: {
    newId() {
      return uuid()
    }
  }
}
