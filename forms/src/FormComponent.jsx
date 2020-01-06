import React from "react";

class FormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      areaValue: "",
      selectValue: "",
      selectText: "",
      selectedOptionValue: "1",
      selectedOptionText: "",
      selectedItems: ["1", "2"]
    };
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleCheckOnChange = this.handleCheckOnChange.bind(this);
  }

  handleOnChange = e => {
    const val = e.target.value;
    this.setState({
      inputValue: val
    });
  };

  handleAreaOnChange = e => {
    const val = e.target.value;
    this.setState({ areaValue: val });
  };

  handleSelectOnChange = e => {
    const index = e.nativeEvent.target.selectedIndex;
    const text = e.nativeEvent.target[index].text;
    const val = e.nativeEvent.target.value;
    this.setState({ selectValue: val, selectText: text });
  };

  handleOptionChange(e) {
    const val = e.target.value;
    console.log(val);
    this.setState({
      selectedOptionValue: val
    });
  }

  handleCheckOnChange(e) {
    const val = e.target.value;
    const list = this.state.selectedItems;
    let newList;
    if (list.includes(val)) {
      newList = list.filter(item => item !== val);
      
    }
    else{
        newList = list.concat(val);
    }
    this.setState({selectedItems : newList});
  }

  handleSubmit = e => {
    this.setState(state => ({
      values:
        state.inputValue +
        "-" +
        state.areaValue +
        " - " +
        state.selectValue +
        "-" +
        state.selectedOptionValue
    }));
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <b>
            {this.state.values}
            <br></br>
            {this.state.inputValue}
            <br></br>
            {this.state.areaValue}
            <br></br>
            Araban : {this.state.selectText}
            <br></br>
            {this.state.selectedItems.map(x=> <li>{x}</li>)}
          </b>
        </p>
        <hr></hr>
        <input
          value={this.state.inputValue}
          onChange={this.handleOnChange}
        ></input>
        <br></br>
        <textarea
          value={this.state.areaValue}
          onChange={this.handleAreaOnChange}
        ></textarea>
        <br></br>
        <select
          value={this.state.selectValue}
          onChange={this.handleSelectOnChange}
        >
          <option value="1">Mercedes</option>
          <option value="2">BMW</option>
          <option value="3">Audi</option>
          <option value="4">WV</option>
        </select>
        <br></br>
        <div>
          <label>
            <input
              type="radio"
              name="carRadio"
              value="1"
              checked={this.state.selectedOptionValue == 1}
              onChange={this.handleOptionChange}
            ></input>
            Mercedes
          </label>
        </div>

        <div>
          <label>
            <input
              type="radio"
              name="carRadio"
              value="2"
              checked={this.state.selectedOptionValue == "2"}
              onChange={this.handleOptionChange}
            ></input>
            BMW
          </label>
        </div>

        <div>
          <label>
            <input
              type="radio"
              name="carRadio"
              value="3"
              checked={this.state.selectedOptionValue === 3}
              onChange={this.handleOptionChange}
            ></input>
            Audi
          </label>
        </div>
        <hr></hr>
        <div>
          <label>
            <input
              type="checkbox"
              value="1"
              name="country"
              checked={this.state.selectedItems.includes("1")}
              onChange={this.handleCheckOnChange}
            ></input>
            Turkey
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="2"
              name="country"
              checked={this.state.selectedItems.includes("2")}
              onChange={this.handleCheckOnChange}
            ></input>
            England
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="3"
              name="country"
              checked={this.state.selectedItems.includes("3")}
              onChange={this.handleCheckOnChange}
            ></input>
            Iceland
          </label>
        </div>
        {/* <input type="radio" name="carRadio" value="2">
            BMW
          </input>
          <input type="radio" name="carRadio" value="3">
            Audi
          </input> */}

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default FormComponent;
