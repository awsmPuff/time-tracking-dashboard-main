const data = fetch('data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    return data;
  })
  .catch(error => console.log(error));

  const dailyRecord = document.querySelector(".daily");
  const weeklyRecord = document.querySelector(".weekly");
  const monthlyRecord = document.querySelector(".monthly");
  const workHrs = document.querySelector(".work-hrs");
  const prevWorkHrs = document.querySelector(".pre-work-hrs");
  const playHrs = document.querySelector(".play-hrs");
  const prevPlayHrs = document.querySelector(".pre-play-hrs");
  const studyHrs = document.querySelector(".study-hrs");
  const prevStudyHrs = document.querySelector(".pre-study-hrs");
  const exerciseHrs = document.querySelector(".exercise-hrs");
  const prevExerciseHrs = document.querySelector(".pre-exercise-hrs");
  const socialHrs = document.querySelector(".social-hrs");
  const prevSocialHrs = document.querySelector(".pre-social-hrs");
  const selfCareHrs = document.querySelector(".self-care-hrs");
  const prevSelfCareHrs = document.querySelector(".pre-self-care-hrs");

  data.then(data => {

    dailyRecord.addEventListener("click", () => {
        if(!dailyRecord.classList.contains("active")) {
            dailyRecord.classList.add("active");
            weeklyRecord.classList.remove("active");
            monthlyRecord.classList.remove("active");
            workHrs.innerHTML = data[0].timeframes.daily.current + "hrs";
            prevWorkHrs.innerHTML = "Last Week - " + data[0].timeframes.daily.previous + "hrs";
            playHrs.innerHTML = data[1].timeframes.daily.current + "hrs";
            prevPlayHrs.innerHTML = "Last Week - " + data[1].timeframes.daily.previous + "hrs";
            studyHrs.innerHTML = data[2].timeframes.daily.current + "hrs";
            prevStudyHrs.innerHTML = "Last Week - " + data[2].timeframes.daily.previous + "hrs";
            exerciseHrs.innerHTML = data[3].timeframes.daily.current + "hrs";
            prevExerciseHrs.innerHTML = "Last Week - " + data[3].timeframes.daily.previous + "hrs";
            socialHrs.innerHTML = data[4].timeframes.daily.current + "hrs";
            prevSocialHrs.innerHTML = "Last Week - " + data[4].timeframes.daily.previous + "hrs";
            selfCareHrs.innerHTML = data[5].timeframes.daily.current + "hrs";
            prevSelfCareHrs.innerHTML = "Last Week - " + data[5].timeframes.daily.previous + "hrs";
        }
      });

      weeklyRecord.addEventListener("click", () => {
        if(!weeklyRecord.classList.contains("active")) {
            weeklyRecord.classList.add("active");
            dailyRecord.classList.remove("active");
            monthlyRecord.classList.remove("active");
            workHrs.innerHTML = data[0].timeframes.weekly.current + "hrs";
            prevWorkHrs.innerHTML = "Last Week - " + data[0].timeframes.weekly.previous + "hrs";
            playHrs.innerHTML = data[1].timeframes.weekly.current + "hrs";
            prevPlayHrs.innerHTML = "Last Week - " + data[1].timeframes.weekly.previous + "hrs";
            studyHrs.innerHTML = data[2].timeframes.weekly.current + "hrs";
            prevStudyHrs.innerHTML = "Last Week - " + data[2].timeframes.weekly.previous + "hrs";
            exerciseHrs.innerHTML = data[3].timeframes.weekly.current + "hrs";
            prevExerciseHrs.innerHTML = "Last Week - " + data[3].timeframes.weekly.previous + "hrs";
            socialHrs.innerHTML = data[4].timeframes.weekly.current + "hrs";
            prevSocialHrs.innerHTML = "Last Week - " + data[4].timeframes.weekly.previous + "hrs";
            selfCareHrs.innerHTML = data[5].timeframes.weekly.current + "hrs";
            prevSelfCareHrs.innerHTML = "Last Week - " + data[5].timeframes.weekly.previous + "hrs";
        }
      });

      monthlyRecord.addEventListener("click", () => {
        if(!monthlyRecord.classList.contains("active")) {
            monthlyRecord.classList.add("active");
            dailyRecord.classList.remove("active");
            weeklyRecord.classList.remove("active");
            workHrs.innerHTML = data[0].timeframes.monthly.current + "hrs";
            prevWorkHrs.innerHTML = "Last Week - " + data[0].timeframes.monthly.previous + "hrs";
            playHrs.innerHTML = data[1].timeframes.monthly.current + "hrs";
            prevPlayHrs.innerHTML = "Last Week - " + data[1].timeframes.monthly.previous + "hrs";
            studyHrs.innerHTML = data[2].timeframes.monthly.current + "hrs";
            prevStudyHrs.innerHTML = "Last Week - " + data[2].timeframes.monthly.previous + "hrs";
            exerciseHrs.innerHTML = data[3].timeframes.monthly.current + "hrs";
            prevExerciseHrs.innerHTML = "Last Week - " + data[3].timeframes.monthly.previous + "hrs";
            socialHrs.innerHTML = data[4].timeframes.monthly.current + "hrs";
            prevSocialHrs.innerHTML = "Last Week - " + data[4].timeframes.monthly.previous + "hrs";
            selfCareHrs.innerHTML = data[5].timeframes.monthly.current + "hrs";
            prevSelfCareHrs.innerHTML = "Last Week - " + data[5].timeframes.monthly.previous + "hrs";
        }
      });

  })
  