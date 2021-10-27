import React from "react";
import styles from '../../styles/Dropdown.module.css'

class FilterDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      showItems: false,
      selectedItem: props.items && props.items[0]
    }

  }

  dropDown = () => {
    this.setState(prevState => ({
      showItems: !prevState.showItems
    }));
  };

  selectItem = item => {
    this.setState({
      selectedItem: item,
      showItems: false
    });
    this.props.filterChange(item);
  };

  render() {
    const list  = this.props.items
    return (
      <div className={styles.selectBoxBox}>
        <div className={styles.selectBoxContainer}>
          <div className={styles.selectBoxSelectedItem}>
            {this.state.selectedItem != null && this.state.selectedItem.name != null ? this.state.selectedItem.name : ""
            }

          </div>
          <div className= {styles.selectBoxArrow} onClick={this.dropDown}>
            <span
              className={`${
                this.state.showItems
                  ? styles.selectBoxArrowUp
                  : styles.selectBoxArrowDown 
              }`}
            />
          </div>

          <div
            style={{ display: this.state.showItems ? "block" : "none" }}
            className={styles.selectBoxItems}
          >
            {
              list != undefined && list.length > 0 ? 
              <div>
              {
                list.map(item => {
                  return(
                    <div
                    style={{ backgroundColor: "black", paddingLeft : "15px"}}
                    key={item.id}
                    onClick={() => this.selectItem(item)}
                    className={this.state.selectedItem === item ? "selected" : ""}
                  >
                    {item.name}
                  </div>
                  )
                }             
                )
              }
              </div> : null
            }
          </div>
        </div>
      </div>
    );
  }
}

export default FilterDropDown;