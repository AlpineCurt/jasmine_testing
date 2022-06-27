describe("Servers test (with setup and tear-down)", function() {
  beforeAll(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  afterAll(function() {
    serverNameInput.value = '';
    billAmtInput.value = '';
    tipAmt = tipAmtInput.value = '';
    serverTbody.innerHTML = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    allServers = {};
    allPayments = {};
    paymentId = 0;
    serverId = 0;
  });
});
