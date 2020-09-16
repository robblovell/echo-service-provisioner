export const config = {
    applicationName: 'echo-server',
    applicationVersion: '1.0',
    dockerRepository: 'robblovell',
    // these files get mapped to the variables above and uploaded by the provisioner.
    // files referenced here are from the perspective of the src/mixins directory.
    kubernetes: [
        '../../k8s/deployment.yaml',
        '../../k8s/service.yaml',
    ],
}