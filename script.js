function filterProjects() {
    const filter = document.getElementById('projectFilter').value.toLowerCase();
    const projectList = document.getElementById('projectList');
    const projects = projectList.getElementsByTagName('li');

    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];
        const projectName = project.textContent.toLowerCase();

        if (projectName.indexOf(filter) > -1) {
            project.style.display = '';
        } else {
            project.style.display = 'none';
        }
    }
}








