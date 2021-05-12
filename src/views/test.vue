<template>
  <div class="container">
    <div class="row">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src="https://picsum.photos/200/200"
              alt="Avatar"
              style="width:150px;height:150px;"
            />
          </div>
          <div class="flip-card-back">
            <h2>John Doe</h2>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>

      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src="https://picsum.photos/200/200"
              alt="Avatar"
              style="width:150px;height:150px;"
            />
          </div>
          <div class="flip-card-back">
            <h2>John Doe</h2>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>

      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src="https://picsum.photos/200/200"
              alt="Avatar"
              style="width:150px;height:150px;"
            />
          </div>
          <div class="flip-card-back">
            <h2>John Doe</h2>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>

      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src="https://picsum.photos/200/200"
              alt="Avatar"
              style="width:150px;height:150px;"
            />
          </div>
          <div class="flip-card-back">
            <h2>John Doe</h2>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>

      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src="https://picsum.photos/200/200"
              alt="Avatar"
              style="width:150px;height:150px;"
            />
          </div>
          <div class="flip-card-back">
            <h2>John Doe</h2>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>

      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src="https://picsum.photos/200/200"
              alt="Avatar"
              style="width:150px;height:150px;"
            />
          </div>
          <div class="flip-card-back">
            <h2>John Doe</h2>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>

      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src="https://picsum.photos/200/200"
              alt="Avatar"
              style="width:150px;height:150px;"
            />
          </div>
          <div class="flip-card-back">
            <h2>John Doe</h2>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>

      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src="https://picsum.photos/200/200"
              alt="Avatar"
              style="width:150px;height:150px;"
            />
          </div>
          <div class="flip-card-back">
            <h2>John Doe</h2>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flip-card {
  background-color: transparent;
  width: 150px;
  height: 150px;
  margin-left: 12px;
  margin-top: 15px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.75s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
}
</style>
