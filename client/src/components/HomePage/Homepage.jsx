import book from './Pictures/book.jpg'
import game from './Pictures/game.jpg'
import movie from './Pictures/movie.jpg'
import {Link} from 'react-router-dom'

const Homepage =()=>{

    return(
      <div>
    <main role="main">
      <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">Collection Management</h1>
          <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
          <p>
            <a href="#" class="btn btn-primary my-2">Main call to action</a>
            <a href="#" class="btn btn-secondary my-2">Secondary action</a>
          </p>
        </div>
      </section>

      <div class="album py-5 bg-light">
        <div class="container">

          <div class="row">
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" src={book} alt="Books"/>
                <div class="card-body">
                  <h4>Book</h4>
                  <p class="card-text">Find Books you like</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <Link to='book'>
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      </Link>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" src={game} alt="Game"/>
                <div class="card-body">
                <h4>Games</h4>
                  <p class="card-text">Find Games you like</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          
            
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" src={movie} alt="movie"/>
                <div class="card-body">
                <h4>Movie</h4>
                  <p class="card-text">Find Movies you like</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
      </div>
    )
}


export default Homepage;