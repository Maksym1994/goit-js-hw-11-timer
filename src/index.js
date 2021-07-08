import './sass/main.scss';

const refs = {
  daysSpan: document.querySelector("span[data-value='days']"),
  hoursSpan: document.querySelector("span[data-value='hours']"),
  minsSpan: document.querySelector("span[data-value='mins']"),
  secsSpan: document.querySelector("span[data-value='secs']"),
};

class CountdownTimer {
  constructor(selector, targetDate) {
    this.elem = document.querySelector(selector);
    this.targetDate = targetDate;
  }
    intervalId = setInterval(() => {
    const startTime = Date.now();
    let deltaTime = this.targetDate - startTime;
    this.updateClock(deltaTime);
    }, refs.secsSpan);
    
  updateClock(time) {
    const pad = this.pad;
    
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

      refs.daysSpan.textContent = `${days}`;
      refs.hoursSpan.textContent = `${hours}`;
      refs.minsSpan.textContent = `${mins}`;
      refs.secsSpan.textContent = `${secs}`;
  }

  pad(value) {
    return String(value).padStart(2, "0");
  } 
}

new CountdownTimer(...Object.values({
  selector: "#timer-1",
  targetDate: new Date("Jul 21, 2021"),
}));