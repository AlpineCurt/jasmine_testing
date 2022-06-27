describe('Helpers test with setup and teardown', function(){
    beforeAll(function() {
        billAmtInput.value = 100;
        tipAmt = tipAmtInput.value = 20;
        submitPaymentInfo();

        billAmtInput.value = 200;
        tipAmt = tipAmtInput.value = 35;
        submitPaymentInfo();

        serverNameInput.value = 'Alice';
        submitServerInfo();
        serverNameInput.value = 'Mack';
        submitServerInfo();
    })


    it('appendTD(tr, value) should append value to the given tr element', function() {
        let testTr = document.createElement('tr');
        let testValue_1 = 56;
        let testValue_2 = 'words';
        appendTd(testTr, testValue_1);
        appendTd(testTr, testValue_2);

        expect(testTr.cells[0].innerHTML).toEqual('56');
        expect(testTr.cells[1].innerHTML).toEqual('words');
    })

    it('calculateTipPercent(billAmt, tipAmt) should return a whole number', function() {
        let testBill = 68.87;
        let testTip = 18.99;
        let testTipPercent = calculateTipPercent(testBill, testTip);

        expect(testTipPercent).toEqual(28);
    })

    it('sumPaymentTotal(type) should sum the specified payment type', function() {
        expect(sumPaymentTotal('billAmt')).toEqual(300);
        expect(sumPaymentTotal('tipAmt')).toEqual(55);
    })

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
    })
})