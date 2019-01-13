import React, { Component } from 'react';

import './index.css';

export default class FilterSelect extends Component {
  constructor (props) {
    super(props);

    this.state = {
      categoryCollapseStates: [
        {
          isCollapsed: false
        },
        {
          isCollapsed: false
        },
        {
          isCollapsed: false
        }
      ]
    }
  }

  componentWillMount() {
    //set parent's state var selectableFilterItems when FilterSelect is mounted
    //When the filter items are rendered in FilterSelect (here), they pull from the props
    //when the filter items should be changed, they're  changed from the parent (Projects)
    //Parent's filterItems is first set as purely the data from the data.js file until it's init here
    this.props.updateSelectableFilterItems(this.setSelectableFilterCategories(true));
  }

  //populates Parent's (Projects component) selectableFilterCategories with properly structured arr of all filter categories and isSelected flag
  setSelectableFilterCategories(isSelected) {
    return (this.props.filterCategories.map((filterCategory) => {
      return filterCategory.sort().map((filterCategoryItem) => {
        return {
          name: filterCategoryItem.name || filterCategoryItem,
          isSelected: isSelected
        }
      })
    }))
  }

  render() {
    return (
      <div className="FilterSelect">
        {this.renderSelectableFilterCategories()}
        <div className="flex-container-center">
          <button className="light-blue-btn round-btn"
            onClick={(() => {this.toggleAll(true)}).bind(this)}>
            <p className="link-btn-text-content link-btn-txt">Show All</p>
          </button>
          <button className="red-btn round-btn"
            onClick={(() => {this.toggleAll(false)}).bind(this)}>
            <p className="link-btn-text-content link-btn-txt">Hide All</p>
          </button>
        </div>
      </div>
    );
  }

  //render all selectable filter categories
  //renders from state data because it's formatted correctly with both the name and isSelected flag
  renderSelectableFilterCategories() {
    return (
      <div className="flex-container-center">
        {this.props.filterCategories.map(this.renderIndivSelectableFilterCategory.bind(this))}
      </div>
    )
  }

  //render each category and all the text boxes
  renderIndivSelectableFilterCategory(filterCategory, i) {
    let title = this.props.filterCategoryTitles[i];
    let chevronDirection = this.state.categoryCollapseStates[i].isCollapsed ? "up" : "down";

    return (
      <div className="selectable-filter-category-container">
        <div className="selectable-filter-title-container flex-container-center" onClick={(() => {this.toggleCollapseCategory(i)}).bind(this)}>
          <h3 className="selectable-filter-category-title">{title}</h3>
          <p className="center-text"><i className={"chevron filter-category-title-chevron " + chevronDirection}></i></p>
        </div>
        {this.renderSelectableFilterCategoryItems(filterCategory, i)}
      </div>
    )
  }

  //render all items of one category
  //i is index of filter category
  renderSelectableFilterCategoryItems(filterCategory, i) {
    //render all items only if that category is visible
    return ( 
      filterCategory.map(((item, n) => {

        //className from being  visible
        let collapsedClassName = this.state.categoryCollapseStates[i].isCollapsed ? "collapsed-filter-category-text" : "filter-category-text";

        //className from being select and from collapsed
        let selectedClassName = item.isSelected ? "selected-filter-category-text " + collapsedClassName : "unselected-filter-category-text " + collapsedClassName
        return (
          <p className={selectedClassName}
            onClick={(() => {
              //i is index of all filter categories
              //n is index of item in the arr of its category
              this.toggleFilterItem(i, n);
            }).bind(this)}>
            {item.name}</p>
        )
      }).bind(this))
    )
  }

  toggleAll(toShow) {
    this.props.updateSelectableFilterItems(this.setSelectableFilterCategories(toShow));
  }

  //collapses all filter items within a category based on the index of that category
  toggleCollapseCategory(i) {
    //won't have this namespace inside mapped function
    let categoryCollapseStates = this.state.categoryCollapseStates;

    let newCategoryCollapseStates = this.state.categoryCollapseStates.map((categoryCollapseState, categoryCollapseStateIndex) => {
      //found collapse state to toggle
      if (categoryCollapseStateIndex === i) {
        return {
          isCollapsed: !categoryCollapseStates[categoryCollapseStateIndex].isCollapsed
        }
      }

      return {
        isCollapsed: categoryCollapseStates[categoryCollapseStateIndex].isCollapsed
      }
    });

    this.setState({
      categoryCollapseStates: newCategoryCollapseStates
    });
  }

  //i is index of all filter categories
  //n is index of item in the arr of its category
  toggleFilterItem(i, n) {
    let newSelectableFilterCategories = this.cloneSelectableFilterCategories();
    newSelectableFilterCategories[i][n].isSelected = !newSelectableFilterCategories[i][n].isSelected;

    this.props.updateSelectableFilterItems(newSelectableFilterCategories);
  }

  cloneSelectableFilterCategories() {
    return (this.props.filterCategories.map((filterCategory) => {
      return filterCategory.sort().map((filterCategoryItem) => {
        return filterCategoryItem
      })
    }))
  }

  changeFilterItems(i, n) {
    let newSelectableFilterCategories = this.cloneSelectableFilterCategories();
    newSelectableFilterCategories[i][n].isSelected = !newSelectableFilterCategories[i][n].isSelected;

    this.props.updateSelectableFilterItems(newSelectableFilterCategories);
  }

}

