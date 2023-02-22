<script>
  export default {
    name: "AppFooter",
    data() {
      return {};
    },
  };
</script>

<template>
  <div class="container-footer">
    <!-- <h3>Footer</h3> -->
    <div class="logo-footer">
      <a href="/">BOOL<span>bnb</span></a>
    </div>
    <div class="copyright">
      <p>copyright &copy;2023</p>
    </div>
    <div class="social-footer">
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-google-plus-g"></i>
    </div>
  </div>
  
</template>

<style lang="scss">

  .container-footer {
    width: 100%;
    padding: 2rem 0;
    background-color: #ec2b46;
    position:relative;
    
    .logo-footer {
      text-align: center;
  
      a {
        font-size: 30px;
        font-weight: 550;
        text-decoration: none;
        color: white;
        &:hover{
          cursor: pointer;
          color: rgba(255, 255, 255, 0.651);
          
        }
      }
    }
    .copyright{
      position: absolute;
      width: 40%;
      bottom: 2px;
      font-size: 0.8rem;
      left: 50%;
      transform: translateX(-50%);
      p{
        color: white;
        text-align: center;
      }
    }
    .social-footer{
      margin: 0 auto;
      padding: 1.5rem 0;
      width: 25%;
      display: flex;
      justify-content: space-around;
      i{
        color: white;
        &:hover{
          color: rgba(255, 255, 255, 0.651);
          cursor: pointer;
          
        }
      }
    }

  }

</style>
