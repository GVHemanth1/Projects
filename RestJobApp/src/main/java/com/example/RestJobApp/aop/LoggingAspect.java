package com.example.RestJobApp.aop;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Aspect
@Component
//This is Aspect
public class LoggingAspect {

    public static final Logger LOGGER = LoggerFactory.getLogger(LoggingAspect.class);
// @After is Advice and ("execution(* com.example.RestJobApp.service.JobService.getAlljobs(..))")
//    is Pointcut
    @Before("execution(* com.example.RestJobApp.service.JobService.*(..))")
    public void logMethodCall(JoinPoint joinPoint){
        LOGGER.info("Method called : " + joinPoint.getSignature().getName());
    }

// Multiple point cut can be used by || and execution/point cut
    @After("execution(* com.example.RestJobApp.service.JobService.getAlljobs(..)) || execution(* com.example.RestJobApp.service.JobService.getjob(..))")
    public void logMethodExecuted(JoinPoint joinPoint){
        LOGGER.info("Method Executed : " + joinPoint.getSignature().getName());
    }
}
