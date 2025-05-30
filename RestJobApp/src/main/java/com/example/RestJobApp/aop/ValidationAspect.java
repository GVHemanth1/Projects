package com.example.RestJobApp.aop;


import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class ValidationAspect {
    /*

    Validation/handling of getPost by postId service
    This ValidationAspect modifies negative postId values to positive values and then finds/executes
    the service

     */
    private static Logger logger = LoggerFactory.getLogger(ValidationAspect.class);

    @Around("execution(* com.example.RestJobApp.service.JobService.getjob(..)) && args(postId)")
    public Object ValidateAndUpdate(ProceedingJoinPoint proceedingJoinPoint, int postId) throws Throwable {
        if (postId < 0) {
            logger.info("excuting if in ValidationAspect...");
            logger.info("postId "+postId+" is negative ... updating");
            postId = -postId;

            logger.info("postId is " +postId);

        }
        Object object = proceedingJoinPoint.proceed(new Object[]{postId});

        return object;


    }
}
