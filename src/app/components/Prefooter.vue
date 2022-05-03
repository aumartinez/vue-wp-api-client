<template>
  <section class="pre-footer">
    <h2 class="d-none">Pre footer</h2>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <h2 class="text-center">
            New Episode Every Week!
          </h2>
          
          <p class="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
          
          <form class="form-inline" action="/" method="post">
            <input class="form-control" type="email" required="true" name="email" />
            <button type="submit" class="btn btn-primary">
              Subscribe <span class="color-white"><i class="fa-solid fa-arrow-right-long"></i></span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section> 
</template>

<script>

export default {
  name: 'Prefooter',
}
</script>