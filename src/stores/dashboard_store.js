var alt = require('../alt');
var immutableUtil = require('alt/utils/ImmutableUtil');
var Immutable = require('immutable');
var DashboardActions = require('../actions/dashboard_actions');

class DashboardStore {
  constructor() {
    this.state = Immutable.fromJS({
      salesStats: []
    });

    this.bindListeners({
      handleUpdateSalesStats: DashboardActions.UPDATE_SALES_STATS,
      handleFetchSalesStats: DashboardActions.FETCH_SALES_STATS
    });
  }

  handleUpdateSalesStats(salesStats) {
    this.setState(this.state.setIn(['salesStates', salesStates]));
  }

  handleFetchSalesStats() {
    this.setState(this.state.setIn(['salesStates', Immutable.List()]));
  }
}

module.exports = alt.createStore(immutableUtil(DashboardStore), 'DashboardStore');
