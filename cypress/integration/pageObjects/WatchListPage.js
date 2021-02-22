class WatchListPage{

    addRemoveToWatchList(value){
        //cy.visit(value)
        const visitPg = cy.get('#searchInput')
        visitPg.type(value)
        const clickSearch = cy.get('#searchButton')
        clickSearch.click()
        const viewHistory = cy.get('#ca-history > a')
        viewHistory.click()
        const viewSource =cy.get('#ca-viewsource > a')
        viewSource.click()
        const watchStar = cy.get('#ca-watch > a')
        watchStar.click()
        const addWatchBtn = cy.get('#ooui-php-3 > .oo-ui-inputWidget-input')
        addWatchBtn.click()
        //cy.get('body').type('{shift}{alt}W')
        //cy.get('whatever').type('Test all the things', { force: true });
       // watchStar.click()
    }   
    
    addMyWatchList(value){        
        const rawWatchList = cy.get('[href="/wiki/Special:EditWatchlist/raw"]')
        rawWatchList.click()
        const rawList = cy.get('#ooui-php-1')
        rawList.clear()
        rawList.type(value)//.cy.type('{enter}')
        const updateBtn = cy.get('#ooui-php-4 > .oo-ui-inputWidget-input')
        updateBtn.click()

        //const watchStar = cy.get('#ca-watch > a')
        //watchStar.click()
        
    }
    navigateToWatchList(){
        const clickWatchList = cy.get('#pt-watchlist > a')
        clickWatchList.click()
        const clickEditWatchList = cy.get('.mw-rcfilters-ui-watchlistTopSectionWidget-editWatchlistButton > .oo-ui-widget > .oo-ui-buttonElement-button > .oo-ui-labelElement-label')        
        clickEditWatchList.click()
    }

    verifyWatchListItems(value){
        cy.contains("a", "#").should("have.attr", "href", value)
    }

    verifyRecentlyAddedItems(){
        cy.get('[href="/wiki/COVID-19_pandemic"]').should('exist')
        cy.get('[href="/wiki/Mars_2020"]').should('exist')
    }

    verifyRemovedItemNotExist(value){
        cy.contains('[href="/wiki/COVID-19_pandemic"]').should('not.exist')
    }

    verifyTheSecondArtcleIsAvailable(){
        cy.get('[href="/wiki/Mars_2020"]').should('exist')
    }

    verifyTheTitle(){
        cy.get('[href="/wiki/Mars_2020"]').click()
        cy.title().should('eq', 'Mars 2020 - Wikipedia')

    }

    removeMyWatchList(){
        const selectMyList = cy.get('#ooui-php-1')
        selectMyList.click()
        const removeBtn = cy.get('.oo-ui-inputWidget-input > .oo-ui-labelElement-label')
        removeBtn.click()
        cy.get('#mw-content-text').contains("removed")
    }
}export default WatchListPage