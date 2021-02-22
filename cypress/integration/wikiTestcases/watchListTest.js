import LoginPage from '../pageObjects/Login_wikiPage'
import watchListPage from '../pageObjects/WatchListPage'

before(function(){
    cy.fixture('example').then(function(data){
        this.data=data
    })
})

describe('WatchList_TestSuite', function(){    
    const watchPg = new watchListPage
    const loginPg = new LoginPage()

    it('Verify - Valid Login Test', function(){      
        loginPg.visit(this.data.loginURL)
        loginPg.userName(this.data.userName)
        loginPg.password(this.data.password)
        loginPg.submitButton()
        cy.title().should('eq','Wikipedia, the free encyclopedia')
        cy.get('#pt-userpage > .new').contains('Chrismaran')
    })

    it('Add Items(URLs) into my WatchList', function(){
        watchPg.navigateToWatchList()
        watchPg.addMyWatchList(this.data.watchLists)
    })

    it('Verify recently added Items', function(){
        watchPg.navigateToWatchList()
        watchPg.verifyRecentlyAddedItems()
    })

    it('Remove my list', function(){
        watchPg.navigateToWatchList()
        watchPg.removeMyWatchList()
    })

    it('Verify the Removed Item is not available in my WatchList & Make sure the second article is still Present', function(){
        watchPg.navigateToWatchList()
        watchPg.verifyRemovedItemNotExist()
        watchPg.verifyTheSecondArtcleIsAvailable()
    })

    it('Verify the Article title from the WatchList', function(){
        watchPg.navigateToWatchList()
        watchPg.verifyTheTitle()
    })
    
    it('LogOut from Wikipedia', function(){
        loginPg.logOut()
    })
})