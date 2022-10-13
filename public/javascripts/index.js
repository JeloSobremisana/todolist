$(document).ready(function () {
    $('.modal').modal();

    $('.delete-action').on('click', (event) => {
        const id = event.currentTarget.id;
        const action = event.currentTarget.dataset.action;
        $('span[class="action"]').text(action);
        $('button.delete-confirm').attr('id', id);
    });

    $('.delete-confirm').on('click', (event) => {
        const id = event.currentTarget.id;
        const queryString = window.location.href.split('?')[1]
        $.ajax({
            type: 'DELETE',
            url: `/todo/delete/${id}`,
            dataType: 'json',
            contentType: 'application/json',
            success: (data) => {
                if (data.status === 'OK') {
                    location.href = `/?${queryString}`;
                } else alert(data.message);
            }
        });
    });

    $('#add-form').on('submit', (event) => {
        event.preventDefault();
        const action = $('input#todo').val().trim();
        const payload = { action };
        $.ajax({
            type: 'POST',
            url: `/todo/create`,
            data: JSON.stringify(payload),
            dataType: 'json',
            contentType: 'application/json',
            success: (data) => {
                if (data.status === 'OK') {
                    $('input#todo').val('');
                    $('.modal').modal('close');
                    const queryString = window.location.href.split('?')[1]
                    location.href = `/?${queryString}`;
                } else alert(data.message);
            }
        });
    });

    $('.update-status').on('click', (event) => {
        const id = event.currentTarget.id;
        const status = event.currentTarget.dataset.status;
        $.ajax({
            type: 'PUT',
            url: `/todo/update/status`,
            data: JSON.stringify({id,status}),
            dataType: 'json',
            contentType: 'application/json',
            success: (data) => {
                if (data.status === 'OK') {
                    const queryString = window.location.href.split('?')[1]
                    location.href = `/?${queryString}`;
                } else alert(data.message);
            }
        });
    });

    $('ul li').on('click', (event) => {
        console.log('clicked');
    })
});