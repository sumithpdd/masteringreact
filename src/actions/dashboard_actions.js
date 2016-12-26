var alt = require('../alt');
 var SalesStatsFetcher = require('../utils/sales_stats_fetcher');

class DashboardActions {
  updateSalesStats(stats) {
    this.dispatch(stats);
  }

  fetchSalesStats() {
    this.dispatch([]);
    SalesStatsFetcher.fetch()
      .then(this.actions.updateSalesStats.bind(this));
  }
}

module.exports = alt.createActions(DashboardActions);
