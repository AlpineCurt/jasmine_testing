describe('Payments testing including setup and teardown', function() {
    beforeEach(function(){
        serverNameInput.value = 'Alice';
        submitServerInfo();
        serverNameInput.value = 'Mack';
        submitServerInfo();
    })

    it('submitPaymentInfo(evt) should add curPayment object to allPayments', function() {
        billAmtInput.value = 100;
        tipAmt = tipAmtInput.value = 20;
        submitPaymentInfo();

        expect(allPayments.payment1.billAmt).toEqual('100');
        expect(allPayments.payment1.tipAmt).toEqual('20');

        billAmtInput.value = 200;
        tipAmt = tipAmtInput.value = 35;
        submitPaymentInfo();

        expect(allPayments.payment2.billAmt).toEqual('200');
        expect(allPayments.payment2.tipAmt).toEqual('35');

    })

    it('submitPaymentInfo(evt) should update HTML', function() {
        billAmtInput.value = 100;
        tipAmt = tipAmtInput.value = 20;
        submitPaymentInfo();

        let testPaymentTable = document.querySelectorAll('#paymentTable tbody tr td');
        expect(testPaymentTable[0].innerText).toEqual('$100');
    })

    it('createCurPayments() with valid inputs should return an object with billAmt, tipAmt, and tipPercent', function() {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        let curPayment = createCurPayment();

        expect(curPayment.billAmt).toEqual('100');
        expect(curPayment.tipAmt).toEqual('20');
        expect(curPayment.tipPercent).toEqual(20);
    })

    it('createCurPayments() with invalid inputs should return undefined', function() {
        billAmtInput.value = '';
        tipAmtInput.value = -30;
        let curPayment = createCurPayment();

        expect(curPayment).toEqual(undefined);
    })

    afterEach(function(){
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