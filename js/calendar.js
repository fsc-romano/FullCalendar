$(document).ready
(function(){
  $('.datetimepicker').datepicker({
      timepicker: true,
      language: 'en',
      range: true,
      multipleDates: true,
	  multipleDatesSeparator: " - "
  });
  $("#add-event").submit(function(){
      var values = {};
      $('input[name="edate"]').removeAttr('disabled');
      $.each($('#add-event').serializeArray(), function(i, field) {
      	values[i] = field.value;
          if (i == 1) {
          	values[i] = values[i] + 'T00:00:00Z';
          }
      });

      /*console.log(values);*/

      if (values != null) {
        var eventObject = {
			title: values[0],
			start: values[1],
			description: values[2],
			className: values[3],
			icon : values[4]
        };

        $('#calendar').fullCalendar( 'renderEvent', eventObject, true);
        /*$("#calendar").fullCalendar('unselect');*/
        /*alert("Event added to the calendar.");*/
      }

      /*callback(values);*/
      $('#btn-close').click();
      return false;
  });
});

(function () {    
    'use strict';
    // ------------------------------------------------------- //
    // Calendar
    // ------------------------------------------------------ //
	$(function() {
		// page is ready
		var vDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper enim a laoreet ultricies. Suspendisse ultricies placerat sapien, a aliquet arcu rutrum sed.";
		var vDate = moment();
		$('#calendar').fullCalendar({
			themeSystem: 'bootstrap4',
			// emphasizes business hours
			businessHours: false,
			defaultView: 'month',
			// event dragging & resizing
			editable: true,
			// header
			header: {
				left: 'title',
				center: 'month,agendaWeek,agendaDay',
				right: 'today prev,next'
			},
			events: [
				{
					title: 'Conference',
					description: vDesc,
					start: vDate.clone().add(-3, "days").format("YYYY-MM-DDT14:00:00"),
					className: 'fc-bg-blue',
					icon : "calendar",
					allDay: false
				},
				{
					title: 'Barber',
					description: vDesc,
					start: vDate.clone().add(-1, "days").format("YYYY-MM-DDT18:00:00"),
					className: 'fc-bg-default',
					icon : "circle",
					allDay: false
				},
				{
					title: 'Birthday',
					description: vDesc,
					start: vDate.format("YYYY-MM-DDT20:00:00"),
					end: vDate.clone().add(1, "days").format("YYYY-MM-DDT09:00:00"),
					className: 'fc-bg-default',
					icon : "birthday-cake",
				},
				{
					title: 'Meeting',
					description: vDesc,
					start: vDate.clone().add(3, "days").format("YYYY-MM-DDT16:00:00"),
					className: 'fc-bg-lightgreen',
					icon : "suitcase",
					allDay: false
				},
				{
					title: 'Team Meeting',
					description: vDesc,
					start: vDate.clone().add(10, "days").format("YYYY-MM-DDT11:00:00"),
					className: 'fc-bg-pinkred',
					icon : "group",
					allDay: false
				},
				{
					title: 'Restaurant',
					description: vDesc,
					start: vDate.clone().add(14, "days").format("YYYY-MM-DDT13:30:00"),
					className: 'fc-bg-default',
					icon : "glass",
					allDay: false
				},
				{
					title: 'Dermatologist',
					description: vDesc,
					start: vDate.clone().add(24, "days").format("YYYY-MM-DDT10:00:00"),
					className: 'fc-bg-blue',
					icon : "medkit",
					allDay: false
				}
			],
			eventRender: function(event, element) {
				if(event.icon){
					element.find(".fc-title").prepend("<i class='fa fa-"+event.icon+"'></i>");
				}
			  },
			dayClick: function(date, jsEvent, view) {
			    $('#modal-view-event-add').modal();
    			$('.datetimepicker').val(date.format() /*+ ' ' + moment().format("hh:mm A")*/);
			    setTimeout(function() { $('input[name="ename"]').focus() }, 1000);

    			/*alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
    			alert('Current view: ' + view.name);*/
  			},
			eventClick: function(event, jsEvent, view) {
			        $('.event-icon').html("<i class='fa fa-"+event.icon+"'></i>");
					$('.event-title').html(event.title);
					$('.event-body').html(event.description);
					$('.eventUrl').attr('href',event.url);
					$('#modal-view-event').modal();
			},
		})
	});
})($);

