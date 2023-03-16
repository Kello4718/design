# API Яндекс карт. Инструкция.

## Подключение

```html
<div class="location__map" id="location__map"></div>
```

```js
<script src="https://api-maps.yandex.ru/2.1/?apikey=айди_ключа&lang=ru_RU"></script> 
```

>скрипт, который нужно подключить в index.html, где значение у ключа apikey можно получить перейдя по ссылке [https://developer.tech.yandex.ru/services](https://developer.tech.yandex.ru/services) и нажав на JavaScript API и HTTP Геокодер
![Пример скриншота](./source/img/include.png)

## Основные данные

```js
const CENTER = [47.22796578103131, 39.69902471290022];
const ZOOM = 17;
```

>CENTER и ZOOM, это данные, которые можно получить по данной ссылке [https://yandex.ru/map-constructor/location-tool/](https://yandex.ru/map-constructor/location-tool/), введя здесь адрес, который нам необходим 
![Пример скриншота](./source/img/location-tools.png)

## Данные для метки

```js
const IMAGE_WIDTH = 65; // Ширина картинки.
const IMAGE_HEIGHT = 75; // Высота картинки.
const IMAGE_LAYOUT = 'default#image'; // Это значение мы не меняем.
const IMAGE_HREF = 'https://gendalf.ru/local/templates/gendalf_copy/images/company_logo.png'; // Путь к картинки.
const IMAGE_SIZE = [IMAGE_WIDTH, IMAGE_HEIGHT]; // Размер картинки.
const IMAGE_OFFSET = [-IMAGE_WIDTH / 2, -IMAGE_HEIGHT - IMAGE_HEIGHT / 4]; // Положение картинки по отношению к точке.
```

## Данные для маршрута (если мы хотим работать с функционалом маршрута)

```js
let START_POSITION = null; // Начальный адрес для маршрута. Может быть любым. В данном случае это null.
const FINISH_POSITION = 'Халтуринский переулок, 99'; // Конечный адрес для маршрута.
```

## Код для балуна

### Балун по умолчанию

```js
const BALLOON = {
  balloonContentHeader: 'Хедер баллуна',
  balloonContentBody: 'Боди баллуна',
  balloonContentFooter: 'Футер баллуна',
};
```
или же мы можем сделать свой дизайнерский балун

### Балун кастомный

```js
const BALLOON = {
  balloonContent: `
    <div class="balloon">
      <h4>Привет, я нахожусь здесь</h4>
      <p>Это мой дом</p>
      <address>
        <p>Вы можете со мной связаться по телефону: <a href="tel:+79222222222">+7 (922) 222 22-22</a></p>
      </address>
    </div>
  `,
};
```

## Код для метки

```js
const MARK = {
  iconLayout: IMAGE_LAYOUT,
  iconImageHref: IMAGE_HREF,
  iconImageSize: IMAGE_SIZE,
  iconImageOffset: IMAGE_OFFSET,
};
```

## Инициализируем карту

```js
const initMap = () => {
  const map = new ymaps.Map('location__map', {
    center: CENTER,
    zoom: ZOOM,
    controls: ['routePanelControl'], // Подключаем функционал маршрута
  });

  // Функция, которая получает текущее местоположение
  const getNavigation = (position) => {
    const coordinates = position.coords;
    const formatLocation = ymaps.geocode([coordinates.latitude, coordinates.longitude]);
    formatLocation.then((result) => {
      START_POSITION = result.geoObjects.get(0).properties.get('text');

      const routeControl = map.controls.get('routePanelControl');

      // Управлять состоянием функционала маршрута при загрузке страницы
      routeControl.routePanel.state.set({
        type: 'masstransit', // Несколько вариантов (например: такси, автобус, пешком, велосипед)
        fromEnabled: false, // Принимает булевое значение (если false, то вводить точку отправления нельзя по умолчанию)
        from: START_POSITION, // Точка отправления
        toEnabled: true, // Принимает булевое значение (если false, то вводить точку отправления нельзя по умолчанию)
        to: FINISH_POSITION, // Точка прибитыя
      });

      // Если нам нужно изменить тип в панели маршрута, то расскоментируем ниже код.
      // Этот код обращается к типу в панели и меняет его.
      // routeControl.routePanel.options.set({
      //   types: {
      //     masstransit: true, // Общественный транспорт
      //     pedestrian: true, // Пешеход
      //     taxi: true, // Такси
      //   },
      // });
    });
  };

  navigator.geolocation.getCurrentPosition(getNavigation);
  
  const placemark = new ymaps.Placemark(CENTER, BALLOON, MARK); // Метка

  map.geoObjects.add(placemark); // Добавляем метку на карту
  placemark.BALLOON.open(); // Открывает балун програмно при загрузке
};

ymaps.ready(initMap); // Загрузить карту на страницу
```

