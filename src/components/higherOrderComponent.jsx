import React from 'react'

const higherOrderComponent = (WrappedComponent, entity) => {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        data: [],
        input: '',
      }
    }

    componentDidMount() {
      (async () => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/${entity}`
        )
        const json = await response.json()
        this.setState({ ...this.state, data: json })
      })()
    }

    render() {
      const { data, input } = this.state

      let filteredData = []
      // filtering according to the key value of data
      if (entity === 'users') {
        filteredData = data.filter((d) => {
          const { name } = d
          return name.indexOf(input) >= 0
        })
      }

      if (entity === 'todos') {
        filteredData = data.slice(0, 10).filter((d) => {
          const { title } = d
          return title.indexOf(input) >= 0
        })
      }

      return (
        <div>
          <h2>{entity}</h2>
          <input
            type='text'
            value={input}
            onChange={(e) =>
              this.setState({ ...this.state, input: e.target.value })
            }
          />
          <WrappedComponent data={filteredData} />
        </div>
      )
    }
  }
}

export default higherOrderComponent
